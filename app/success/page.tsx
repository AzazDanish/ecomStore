import { Suspense } from "react";
import SuccessClient from "./components/SuccessClient";

const SuccessPage = () => {
  return (
    <div className="">
      <Suspense>
        <SuccessClient />
      </Suspense>
    </div>
  );
};

export default SuccessPage;
