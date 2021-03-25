import { Title } from "@/Presentation/components/atoms";
import { StepItem } from "@/Presentation/components/molecules";

interface Props {
  steps: string[];
  handleStepDelete?: (step: string) => void;
}

export const Steps: React.FC<Props> = ({ steps, handleStepDelete }) => {
  return (
    <>
      <div className="steps">
        <Title color="black" fontSize="lg" isCenter>
          料理手順
        </Title>
        {steps.length > 0 ? (
          steps.map((step, index) => (
            <StepItem
              key={index}
              stepIndex={index + 1}
              handleDelete={handleStepDelete}
            >
              {step}
            </StepItem>
          ))
        ) : (
          <p>料理手順が登録されていません</p>
        )}
      </div>
      <style jsx>{`
        .steps {
          margin: 40px 0 10px 0;
          width: 100%;s
        }
        p {
          text-align: center;
        }
      `}</style>
    </>
  );
};
