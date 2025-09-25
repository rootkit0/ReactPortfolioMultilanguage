import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const { t } = useTranslation();
  const typewriterStrings = t("typewriter", { returnObjects: true });

  return (
    <Typewriter
      options={{
        strings: typewriterStrings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
