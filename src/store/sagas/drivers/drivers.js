import { call, put, select } from "redux-saga/effects";
import { Creators as DriversActions } from "../../ducks/drivers/drivers";
import { Creators as ModalActions } from "../../ducks/adduser/adduser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "../../../services/api";

export function* addDriver(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.user}`);

        const isDuplicated = yield select(state =>
            state.drivers.drivers.find(driver => driver.id === data.id)
        );

        if (isDuplicated) {
            yield put(DriversActions.addDriverFailure("Usuário duplicado."));

            toast.warn(`😅 O usuário ${data.name} já foi adicionado ao mapa.`, {
                position: toast.POSITION.TOP_RIGHT
            });
        } else {
            const user = {
                id: data.id,
                avatar_url: data.avatar_url,
                bio: data.bio,
                followers: data.followers,
                following: data.following,
                name: data.name,
                login: data.login,
                url: data.html_url,
                public_repos: data.public_repos,
                geo: action.payload.geo
            };

            yield put(DriversActions.addDriverSuccess(user));

            toast("Uhuuul! Usuário adicionado! ✅", {
                position: toast.POSITION.TOP_RIGHT,
                className: "toast-success",
                progressClassName: "toast-success-progress"
            });

            yield put(
                ModalActions.addUserHide({
                    modal: false
                })
            );
        }
    } catch (error) {
        yield put(
            DriversActions.addDriverFailure("Usuário não encontrado no GitHub.")
        );

        toast.error("Que pena! 😔 Usuário não encontrado.", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
}
