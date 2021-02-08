import { attr, Model as ORMModel } from 'redux-orm';

export interface Fields {
    name: string;
    nationality?: string;
}

export class Model extends ORMModel {
    static options = {
        idAttribute: 'id',
    };

    static modelName = 'Author';

    static fields = {
        name: attr(),
        nationality: attr(),
    };
}
