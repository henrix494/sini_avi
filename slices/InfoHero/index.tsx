import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `InfoHero`.
 */
export type InfoHeroProps = SliceComponentProps<Content.InfoHeroSlice>;

/**
 * Component for "InfoHero" Slices.
 */
const InfoHero = ({ slice }: InfoHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for info_hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default InfoHero;
