import { lazy, Suspense } from "react";
import "./App.css";
import { ReactLenis } from 'lenis/react';

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, wheelMultiplier: 0.85, smoothWheel: true }}>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </ReactLenis>
  );
};

export default App;
