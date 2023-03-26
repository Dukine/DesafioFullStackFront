import { Api } from "../Services/Api";

import { createContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface iProviderProps {
  children: ReactNode;
}

export interface iLoginUserInfo {
  username: string;
  password: string;
}

interface iLoginResponseData {
  refresh: string;
  access: string;
}

export interface iRegisterUserInfo extends iLoginUserInfo {
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

interface iUser {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  registered_at: string;
  contacts: iContact[];
}

export interface iContact {
  id: string;
  email: string;
  name: string;
  phone: string;
  registered_at: string;
}

interface iUserContext {
  user: iUser | undefined;
  setUser(user: iUser | undefined): void;
  loginUser(info: iLoginUserInfo): Promise<void>;
  registerUser(info: iRegisterUserInfo): Promise<void>;
  loading: boolean;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

const UserProvider = ({ children }: iProviderProps) => {
  const [user, setUser] = useState<iUser>();
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const loginUser = async (info: iLoginUserInfo) => {
    try {
      const { data } = await Api.post<iLoginResponseData>(`login/`, info);
      toast.success(`Logado com sucesso!`);
      localStorage.setItem(`@TOKEN`, data.access);
      await autoLogin();
      navigate("/dashboard");
    } catch (err) {
      axios.isAxiosError(err)
        ? toast.error(`${err.response?.data.detail}`)
        : console.error(err);
    }
  };

  const registerUser = async (info: iRegisterUserInfo) => {
    try {
      await Api.post(`user/`, info);
      toast.success(`Registrado com sucesso!`);
      navigate("/login");
    } catch (err: any) {
      axios.isAxiosError(err) && typeof err.response?.data == "object"
        ? toast.error(`${Object.values(err.response?.data)}`)
        : console.error(err);
      console.log(err);
    }
  };

  const autoLogin = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const { data } = await Api.get<iUser[]>("user/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data[0]);
      } catch (error) {
        localStorage.removeItem("@TOKEN");
        setUser(undefined);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, loginUser, registerUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
