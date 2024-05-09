function groupNotiSourse(notifications) {
    return notifications.reduce((grouped, notification) => {
        const { source, text, date } = notification;
        grouped[source] = grouped[source] || [];
        grouped[source].push({ text, date });
        return grouped;
    }, {});
}

const notifications = [
    { source: 'email', text: 'Пришел новый email', date: '08.05.2024' },
    { source: 'sms', text: 'Привет, как дела?', date: '07.05.2024' },
    { source: 'sms', text: 'Как бы отправь уже email', date: '09.05.2024' },
    { source: 'phone', text: 'Missed call from John', date: '10.05.2024' },
];

const groupedBySource = groupNotiSourse(notifications);
console.log(groupedBySource);

