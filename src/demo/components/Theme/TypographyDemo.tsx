import Typography from "components/Typography";
import { fonSizes, fontWeight } from "pattens/typography";

type FontSizesProps = keyof typeof fonSizes;
type FontWeightProps = keyof typeof fontWeight;

function TypographyDemo() {
  const fontWeights = ["medium", "semiBold", "bold"] as FontWeightProps[];

  const fonSizes = [
    "xxs",
    "xs",
    "medium",
    "large",
    "display",
  ] as FontSizesProps[];

  return (
    <div>
      {fontWeights.map((weight, key1) => (
        <>
          <Typography weight={weight}>
            {weight}: {fontWeight[weight]}
          </Typography>
          {fonSizes.map((size, key2) => (
            <Typography key={key1 + key2} size={size} weight={weight}>
              Whereas recognition of the inherent dignity
            </Typography>
          ))}
        </>
      ))}
    </div>
  );
}

export default TypographyDemo;
