import { ProductResolvers } from "../generated/graphql";


export default {
    Query:{


    },
    Mutation:{
        addProduct:async(_:any, args: ProductResolvers) => {
            const {description, image, name, range} = args;
        }

    }
    
}