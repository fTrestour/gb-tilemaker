import { Component, Show, createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import { LIGHT, DARK } from "~/styles";

const CopyButton: Component<{ value: string }> = (props) => {
  const [copied, setCopied] = createSignal(false);

  const copyToClipboard = async () =>
    await navigator.clipboard.writeText(props.value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    });

  return (
    <Wrapper onClick={copyToClipboard}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,700,0,0"
      />
      <Show
        when={copied()}
        fallback={<span class="material-symbols-sharp">content_copy</span>}
      >
        <span class="material-symbols-sharp">done</span>
      </Show>
    </Wrapper>
  );
};
export default CopyButton;

const Wrapper = styled("button")`
  all: unset;
  padding: 0 20px;
  font-size: 20px;
  border: 2px solid ${LIGHT};
  border-left: none;

  background: ${LIGHT};
  color: ${DARK};
  &:hover {
    background: ${DARK};
    color: ${LIGHT};
  }
`;
