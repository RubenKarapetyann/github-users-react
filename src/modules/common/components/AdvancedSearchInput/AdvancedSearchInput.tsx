import { memo, useState } from "react"
import * as styles from "./AdvancedSearch.module.scss"
import { IAdvancedSearchInputProps } from "../../types/header"

// structure
 // APP.tsx (all general routs) , users/asf => Profile, users => Users, advaced => Advanced
 // modules
   // users (or home, or /)
     // components
       // FirstCompoent
         // FirstCompoent.module.scss
         // index.ts export {FirstComponent as defaut} from "./FirstCompoent.tsx"
         // FirstCompoent.tsx
         // types.ts ????
     // reqestService
     // hooks
     // index.tsx (routes)
     // types.ts (IUser, IUserList)
   // profile
   // favorites
   // advanced
   // common
     // components
     

const AdvancedSearchInput = ({ filter, label, initialValue, changeHandle }: IAdvancedSearchInputProps) => {
    const [value, setValue] = useState(initialValue)
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        if (e.target.checkValidity() && +e.target.value !== +value) {            
            changeHandle(filter, e.target.value)
        }
    }

    return (
        <div className={styles.advancedSearchInputContainer}>
            <label htmlFor={filter}>{label}</label>
            <input
                type="number"
                id={filter}
                pattern="[0-9]*"
                min={0}
                max={999999}
                className={styles.advancedSearchInput}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default memo(AdvancedSearchInput)
