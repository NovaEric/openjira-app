import type { NextApiRequest, NextApiResponse } from 'next';
import { Entry, IEntry } from '../../../../models';
import { db } from '../../../../database';


type Data = | { message: string } | IEntry;


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    // const {id} = req.query;

    // if ( !mongoose.isValidObjectId(id) ) {

    //     return res.status(400).json({ message: id + ' is not a valid ID' });
        
    // };

    switch (req.method) {
        case 'PUT':
            return updateEntry( req, res );    
        case 'GET':
            return getEntryByID( req, res );    
        case 'DELETE':
            return delEntryByID( req, res );    
    
        default:
            return res.status(400).json({ message: 'Method does not exist' });
    };
};

const getEntryByID = async( req: NextApiRequest, res: NextApiResponse ) => {

    const { id } = req.query;

    await db.connect();
    const entryByID = await Entry.findById(id);
    await db.disconnect();

    if (!entryByID) {

        await db.disconnect();
        return res.status(400).json({ message: 'Nothing found with ID: ' + id });
        
    };
    
    res.status(200).json( entryByID );
};

const delEntryByID = async( req: NextApiRequest, res: NextApiResponse ) => {

    const { id } = req.query;

    await db.connect();
    const entryByID = await Entry.findByIdAndDelete(id);
    await db.disconnect();

    if (!entryByID) {

        await db.disconnect();
        return res.status(400).json({ message: 'Nothing found with ID: ' + id });
        
    };
    
    res.status(200).json( entryByID );
};

const updateEntry = async( req: NextApiRequest, res: NextApiResponse<Data> ) => {

    const {id} = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById( id );

    if (!entryToUpdate) {

        await db.disconnect();
        return res.status(400).json({ message: 'Nothing found with ID: ' + id });
        
    };

    const { 
        description = entryToUpdate.description,
        status = entryToUpdate.status, 
    } = req.body;

    try {

    const updatedEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } );
    // the below is the same as the above 
    // entryToUpdate.description = description;
    // entryToUpdate.status = status;
    // await entryToUpdate.save();

    await db.disconnect();

    res.status(200).json( updatedEntry! );

        
    } catch (error: any ) {

        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message });
        
    }

    

};