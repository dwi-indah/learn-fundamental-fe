import { useState } from "react";

function useToggle(initialValue = false) {
    const [isVisible, setIsVisible] = useState(initialValue);

    function actionToggle() {
        return setIsVisible(prev => !prev);
    }

    return { isVisible, actionToggle };
}

export default useToggle;