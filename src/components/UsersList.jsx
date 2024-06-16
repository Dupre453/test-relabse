import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchUsers, deleteUser, selectUsers, selectUsersLoading, selectUsersError, selectTotalPages,} from '../store/usersSlice'

import Pagination from "./Pagination";
import {formatTimestamp} from "../utils/utils";

import '../styles/components/_usersList.scss'


const UsersList = () => {
    const users = useSelector(selectUsers);
    const isLoading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);
    const totalPages = useSelector(selectTotalPages);
    const [currentPage, setCurrentPage] = React.useState(1);
    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(fetchUsers(currentPage));
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId));
    };


    return (
        <div className='mb-20 '>
            <h2 className='flex justify-center mb-5 text-lg font-bold'>Список пользователей</h2>
            {isLoading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
                <table className='user-table'>
                    <thead>
                    <tr >
                        <th >ID</th>
                        <th>Имя</th>
                        <th>Роль</th>
                        <th>Дата создания</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr className='border-b-2' key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.role}</td>
                            <td>{formatTimestamp(user.ctime)}</td>
                            <td>
                                <button
                                    className='bg-red-400 text-amber-50 font-bold rounded-xl px-3 py-2 hover:bg-red-600 transition-all'
                                    onClick={() => handleDeleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
           <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               handleNextPage={handleNextPage}
               handlePreviousPage={handlePreviousPage}
           />
        </div>
    );
};

export default UsersList;