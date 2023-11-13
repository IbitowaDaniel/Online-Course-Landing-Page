

export const SectionHeaderLeft = ({ heading, headingSecondary }) => (
  <div className="text-center lg:text-left">
    <p className="heading">{heading}</p>
    <h3 className="headingSecondary lg:text-4xl lg:leading-[3rem] xl:leading-[3.5rem] xl:text-[42px]">{headingSecondary}</h3>
  </div>
);