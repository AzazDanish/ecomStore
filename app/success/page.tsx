import { Suspense } from "react";
import SuccessClient from "./components/SuccessClient";

const SuccessPage = () => {
  return (
    <div className="">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessClient />
      </Suspense>
    </div>
  );
};

export default SuccessPage;
