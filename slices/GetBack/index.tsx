import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import GetBackComp from "@/components/getBack/GetBackComp";
/**
 * Props for `GetBack`.
 */
export type GetBackProps = SliceComponentProps<Content.GetBackSlice>;

/**
 * Component for "GetBack" Slices.
 */
const GetBack = ({ slice }: GetBackProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <GetBackComp slice={slice} index={0} slices={[]} context={undefined} />
    </section>
  );
};

export default GetBack;
