import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";


const Registration = async ({params: {userId}}: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">

    <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[469px]">
            <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 w-fit"
            />

            <RegisterForm user={user} />


            <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
                © 2024 AcelCare.
            </p>
            <Link href="/?admin=true" className="text-green-500">
                admin
            </Link>
            </div>
        </div>
        </section>

        <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img
        max-w-[390px] 
        xl:max-w-[500px] 
        2xl:max-w-[800px]                                                                                                                                                                               "
      /> 
    </div>
  );
};

export default Registration;
