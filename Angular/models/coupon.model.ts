import { Category } from './category.model';

export class Coupon {

    constructor(
        public id?: string,
        public companyID?: string,
        public category?: Category,
        public title?: string,
        public description?: string,
        public startDate?: Date,
        public endDate?: Date,
        public offer?: number,
        public code?: string,
        public image?: string,
           
    ) { }
}