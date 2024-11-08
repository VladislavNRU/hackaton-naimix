import dayjs from 'dayjs';

class Formatter {
	static fromUnixToDateTime(unixTime: number): Date {
		return dayjs.unix(unixTime).toDate();
	}

	static fromDateTimeToUnix(date: Date): number {
		return Math.floor(dayjs(date).valueOf() / 1000);
	}

	static fromTimestampToDateTime(timestamp: number): Date {
		return dayjs(timestamp).toDate();
	}

	static parseISO8601Timestamp(timestamp: string | Date): Date {
		return dayjs(timestamp).toDate();
	}

	static formatDateTimeString(dateTimeString?: string | Date, withTime = true): string {
		if (!dateTimeString) return 'Invalid Date';
		if (!withTime) return dayjs(dateTimeString).format('DD.MM.YYYY');
		return dayjs(dateTimeString).format('DD.MM.YYYY HH:mm');
	}
}

export default Formatter;
