import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/user/user.interface";
import { IFilterOption } from "../interfaces/filter-options.interface";

const filterUserListByName = (name: string, usersList: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined || name === '';

    if (NAME_NOT_TYPPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user: IUser) => user.nome.toLowerCase().includes(name.toLowerCase()));
    return filteredList;
}


const filterUserListByDate = (startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] => {
    const DATES_NOT_SELE = startDate === undefined || endDate === undefined;
    if (DATES_NOT_SELE) {
        return usersList;
    }
    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
        start: startDate,
        end: endDate
    });
    const listFiltered = usersList.filter(checkDateInterval);
    return listFiltered;
}

const filterUserListByStatus = (status: boolean | undefined, usersList: IUser[]): IUser[] => {
    const STATUS_NOT_TYPPED = status === undefined;
    if (STATUS_NOT_TYPPED) {
        return usersList;
    }
    const filteredList = usersList.filter((user) => user.ativo.toString() === status.toString());
    return filteredList;
}

const filterUsersList = (filterOptions: IFilterOption, usersList: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];
    filteredList = filterUserListByName(filterOptions.name, usersList);
    console.log('Por nome', filteredList);
    filteredList = filterUserListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);
    filteredList = filterUserListByStatus(filterOptions.status, filteredList);
    console.log('Por status', filteredList);
    return filteredList;
}

export { filterUsersList };