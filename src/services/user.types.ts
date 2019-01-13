import { User } from '@/components/admin/types';

type AffectedRows = number;

interface InsertedUser {
    id: string;
    name: string;
}

interface Insertion {
    affected_rows: AffectedRows;
    returning: InsertedUser[];
}

export interface InsertUserQuery {
    insert_User: Insertion;
}

export interface GetUserQuery {
    User: User[];
}