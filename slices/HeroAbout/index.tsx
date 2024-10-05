import HeroAboutComp from "@/components/heroAboutComp/HeroAboutComp";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroAbout`.
 */
export type HeroAboutProps = SliceComponentProps<Content.HeroAboutSlice>;

/**
 * Component for "HeroAbout" Slices.
 */
const HeroAbout = ({ slice }: HeroAboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <HeroAboutComp slice={slice} />
    </section>
  );
};

export default HeroAbout;
