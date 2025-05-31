const TextAnimate = ({ text }: { text: string }) => {
  return (
    <span
      className={`relative max-w-max whitespace-nowrap text-center before:absolute before:right-full before:top-0 before:text-black/10 before:content-[attr(data-title)] after:absolute after:left-0 after:text-black/10 after:content-[attr(data-title)]`}
      data-title={text.repeat(12)}
      data-id={text}
    >
      {text}
    </span>
  );
};

export default TextAnimate;
