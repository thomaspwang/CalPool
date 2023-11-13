import { SingleDigitInput } from "../../components";
import { useState, useRef, useEffect } from "react";
import { handleKeyDownVerify, handlePasteVerify } from "../../utils/utils";
import "./Verification.css";

export default function Verification() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [loading, setLoading] = useState(false);
  const [wrong, setWrong] = useState(false);

  useEffect(() => {

    const submit_code = async () => {

      if (!code.every((c) => c != null && c.length === 1)) return

      const verification_code = parseInt(code.join(""));
      console.log(verification_code);
    }

    submit_code()

  }, [code, setLoading, setCode, setWrong]);

  return (
    <div className="container">
      <h1 className="header">CalPool</h1>
      <div className="heading-text">Sent verification code to</div>
      <form className="form">
        <div className="code">
          {code.map((digit, index) => (
            <SingleDigitInput
              key={index}
              index={index}
              value={digit}
              handleKeyDown={(event) => handleKeyDownVerify(event, code, setCode, inputRefs, setLoading, setWrong)}
              ref={inputRefs[index]}
              handlePaste={(event) => handlePasteVerify(event, setWrong, code, inputRefs, setCode)}
              wrong={wrong}
            />
          ))}
        </div>
      </form>
    </div>
  );
}
