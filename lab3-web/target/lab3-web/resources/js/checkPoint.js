function checkPoint(x, y, r) {
    let min_rad= r * (-1);
    if(x > 0 && y < 0 && y >= min_rad) {
        
        if(x <= r) {
            return true;
        }

        return false;
    }
    
    if(x <= 0 && y <= 0 && y >= min_rad) {
        let res = min_rad / 2;
        if(x >= min_rad) {
            return true;
        }

        return false;
    } 
    
    if(x <= 0 && y >= 0 && x >= min_rad && y <= r) {
        return true;
    }    

    return false;
}


