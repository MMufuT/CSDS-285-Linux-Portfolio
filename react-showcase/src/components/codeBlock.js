import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks';

const CustomCodeBlock = ({ text }) => {
  return (
    <CopyBlock
      text={text}  // Ensure this matches the prop you pass in from the parent component.
      language="bash"
      showLineNumbers={true}  // Changed from 'true' (string) to true (boolean).
      theme={dracula}
    />
  );
}

export default CustomCodeBlock;
