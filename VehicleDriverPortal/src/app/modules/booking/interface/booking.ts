export interface IBooking{
    booking_ID : number ,
	vehicleId : number ,
	driverId: number  ,
	startDateTime : Date | null,
	endDateTime : Date | null,
	fromLocation: string | null,
	toLocation: string | null
	distance : number | null,
	bookingType:string | null,
	tripFare: number | null,
	fuelExpense: number | null,
	driverShare: number | null,
	remarks:string | null

}