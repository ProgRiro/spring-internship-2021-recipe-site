import { Title } from "@/Presentation/components/atoms";
import { Colors } from "@/Library/StyleTypes";

interface Props {
  steps: string[];
}

export const Steps: React.FC<Props> = ({ steps }) => {
  return (
    <>
      <div className="steps">
        <Title color="black" fontSize="lg" isCenter>
          作り方
        </Title>
        {steps.map((step, index) => (
          <div key={index} className="ingredient">
            <div className="stepIndex">{index}</div>
            <div className="stepDescription">
              <p>{step}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .steps {
          margin: 50px 0;
        }
        .ingredient {
          display: flex;
          align-items: center;
        }
        .stepIndex {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 40px;
          min-height: 40px;
          color: ${Colors.white};
          background-color: ${Colors.green};
          border-radius: 10px;
          font-weight: bold;
        }
        .stepDescription {
          margin-left: 15px;
        }
      `}</style>
    </>
  );
};
