import { Chip, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

export default function SubModal2({
  setSubModal,
  subModal,
  setVerify,
  setOpen,
}) {
  return (
    <div>
      <div className="relative">
        <Modal
          open={subModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:w-[654px] xl:w-[654px] lg:w-[654px]  md:w-[654px] w-[90%]    2xl:h-[488px] xl:h-[488px] lg:h-[488px] h-auto  bg-[#FFF] rounded-lg ">
            <div className=" cursor-pointer ">
              <RxCross2
                onClick={() => {
                  setSubModal(false);
                }}
                color="#D6D6D6"
                size="30px"
                className="cross_btn absolute right-5 top-2   mt-[16px] hover:rotate-180 duration-500"
              />
              <div className="signUp_container pt-[72px] 2xl:px-0 px-10">
                <div>
                  <h3 className=" text-[16px] font-semibold text-[#000] pb-[14px] 2xl:w-[372px] w-full mx-auto 2xl:text-start text-start">
                    Besoin d'aide pour récupérer votre compte ?
                  </h3>
                  <p className="text-[#666] font-medium text-[14px] pb-[47px] leading-5 2xl:w-[372px] w-full mx-auto text-start">
                    Entrez votre adresse e-mail pour recevoir un code de
                    vérification unique (OTP) et réinitialiser votre mot de
                    passe.
                  </p>

                  <div className=" 2xl:w-[372px] w-full 2xl:h-[46px] h-auto mx-auto">
                    <div>
                      <label
                        htmlFor=" e-mail"
                        className="text-[14px] text-[#000] font-semibold pb-[10px] block"
                      >
                        Adresse e-mail
                      </label>
                    </div>
                    <div className="input_filed pb-[17px]">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Entrez votre adresse e-mail"
                        className="2xl:w-[372px] w-full 2xl:h-[46px] h-[46px] pl-[25px] border rounded-full border-[#CFCFCF]  outline-none placeholder:text-[#CFCFCF]"
                      />
                    </div>

                    {/* button */}
                    <div
                      className=" pb-[15px] pt-[33px]"
                      onClick={() => {
                        setSubModal(false);
                        setVerify(true);
                      }}
                    >
                      <button className="common_btn  w-full 2xl:h-[46px] h-[46px] rounded-full text-[#fff] font-semibold text-[15px] ">
                        Se connecter
                      </button>
                    </div>
                    {/* button */}
                    {/* button */}
                    <div
                      className="2xl:pb-0 pb-5"
                      onClick={() => {
                        setSubModal(false);
                        setOpen(true);
                      }}
                    >
                      <button className="common_btn  w-full h-[46px] rounded-full text-[#fff] font-semibold text-[15px] flex justify-center items-center gap-2">
                        <HiOutlineArrowNarrowLeft color="white" size="20px" />
                        Retour à la page de connexion
                      </button>
                    </div>
                    {/* button */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
