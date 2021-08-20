import { useState } from "react";
import styled from "styled-components";
import { FAQData } from "../../data/FAQData";

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FAQSectionHeader = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  color: #22222c;
  text-align: center;
  @media (min-width: 1440px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
`;

const FAQSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FAQQiestionSection = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 16px;
  width: 343px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    width: 736px;
  }
`;

const FAQQuestion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #212121;
  cursor: pointer;
`;

const FAQQuestionTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.4px;
  color: #212121;
`;

const FAQQuestionArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const FAQQuestionArrow = styled.img`
  width: 24px;
  height: 24px;
`;

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleQuesion = (i) => {
    if (selectedQuestion === i) {
      return setSelectedQuestion(null);
    }
    setSelectedQuestion(i);
  };

  return (
    <FAQSection>
      <FAQSectionHeader>Frequently Asked Questions </FAQSectionHeader>
      <FAQSectionWrapper>
        {FAQData.map((item, i) => (
          <FAQQiestionSection>
            <FAQQuestion onClick={() => toggleQuesion(i)}>
              <FAQQuestionTitle>{item.question}</FAQQuestionTitle>

              <FAQQuestionArrowWrapper>
                {selectedQuestion === i ? (
                  <FAQQuestionArrow
                    src={require(`../../images/icons/arrow_up.png`).default}
                  />
                ) : (
                  <FAQQuestionArrow
                    src={require(`../../images/icons/arrow_down.png`).default}
                  />
                )}
              </FAQQuestionArrowWrapper>
            </FAQQuestion>

            {selectedQuestion === i ? <div>{item.answer}</div> : null}
          </FAQQiestionSection>
        ))}
      </FAQSectionWrapper>
    </FAQSection>
  );
};

export default FAQ;
