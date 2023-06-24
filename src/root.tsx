// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { styled } from "solid-styled-components";
import { DARK, LIGHT, importFonts } from "./styles";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>GB TileMaker</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StyledBody class={importFonts}>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </StyledBody>
    </Html>
  );
}

const StyledBody = styled(Body)`
  margin: 0px;
  background-color: ${DARK};
  color: ${LIGHT};
`;
