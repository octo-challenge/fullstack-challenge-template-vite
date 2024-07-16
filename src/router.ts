// Generouted, changes to this file will be overriden
/* eslint-disable */

import {
  components,
  hooks,
  utils,
} from "@hansanghyeon/generouted-react-router/client";

export type Path = `/` | `/login` | `/register`;

export type Params = {};

export type ModalPath = `/modal`;

export type ModalParams = {
  "/modal": undefined;
};

export const { Link, Navigate } = components<Path, Params>();
export const { useModals, useNavigate, useParams } = hooks<
  Path,
  Params,
  ModalPath,
  ModalParams
>();
export const { redirect } = utils<Path, Params>();
