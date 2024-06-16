export const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const formattedDate = date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    return formattedDate;
};