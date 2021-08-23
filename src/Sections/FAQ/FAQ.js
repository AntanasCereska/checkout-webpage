import styled from "styled-components";
import { useState } from "react";
import { FAQData } from "../../data/FAQData";
import { Heading3 } from "../../Components/Headings/Heading3";
import { Heading5 } from "../../Components/Headings/Heading5";
import { ParagraphSmall } from "../../Components/Paragraphs/ParagraphSmall";

const FAQSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 343px;
  @media (min-width: 1440px) {
    width: 736px;
  }
`;

const Heading3Center = styled(Heading3)`
  @media (min-width: 1440px) {
    text-align: center;
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
  width: 100%;
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

  //toggle question's answer
  const toggleQuesion = (i) => {
    if (selectedQuestion === i) {
      return setSelectedQuestion(null);
    }
    setSelectedQuestion(i);
  };

  return (
    <FAQSection>
      <Heading3Center>Frequently Asked Questions</Heading3Center>
      <FAQSectionWrapper>
        {FAQData.map((item, i) => (
          <FAQQiestionSection>
            <FAQQuestion onClick={() => toggleQuesion(i)}>
              <Heading5>{item.question}</Heading5>

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

            {selectedQuestion === i ? (
              <ParagraphSmall>{item.answer}</ParagraphSmall>
            ) : null}
          </FAQQiestionSection>
        ))}
      </FAQSectionWrapper>
    </FAQSection>
  );
};

export default FAQ;
