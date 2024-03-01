function setR(r) {
    document.getElementById("form:radius").value = r;
}

function setX(x) {
    if(x.value == 0) {
        x.value = 1;
    }
    document.getElementById("form:x").value = x.value;
}


function checkPointValid(r, pointX, pointY) {
    if (r === '1') {
        // for triangle 
        if (pointX >= 150 && pointX <= 250) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 150 && pointX <= 160) {
                    pointX = 0.1;
                }
                if (pointX > 160 && pointX <= 170) {
                    pointX = 0.2;
                }
                if (pointX > 170 && pointX <= 180) {
                    pointX = 0.3;
                }
                if (pointX > 180 && pointX <= 190) {
                    pointX = 0.4;
                }
                if (pointX > 190 && pointX <= 200) {
                    pointX = 0.5;
                }
                if (pointX > 200 && pointX <= 210) {
                    pointX = 0.6;
                }
                if (pointX > 210 && pointX <= 220) {
                    pointX = 0.7;
                }
                if (pointX > 220 && pointX <= 230) {
                    pointX = 0.8;
                }
                if (pointX > 230 && pointX <= 240) {
                    pointX = 0.9;
                }
                if (pointX > 240 && pointX <= 250) {
                    pointX = 1;
                }
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1;
                }
            }
        }


        // for square
        if (pointX >= 100 && pointX <= 150 && pointY > 150) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 100 && pointX <= 110) {
                    pointX = -0.5;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1;
                }
                
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1;
                }
            }
        }

        // for circle
        if (pointX >= 50 && pointX <= 150) {
            if (pointY >= 50 && pointY <= 150) {
                if (pointX >= 50 && pointX <= 60) {
                    pointX = -1;
                }
                if (pointX > 60 && pointX <= 70) {
                    pointX = -0.9;
                }
                if (pointX > 70 && pointX <= 80) {
                    pointX = -0.8;
                }
                if (pointX > 80 && pointX <= 90) {
                    pointX = -0.7;
                }
                if (pointX > 90 && pointX <= 100) {
                    pointX = -0.6;
                }
                if (pointX > 100 && pointX <= 110) {
                    pointX = -0.5;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1;
                }


                if (pointY > 50 && pointY <= 60) {
                    pointY = 1;
                }
                if (pointY > 60 && pointY <= 70) {
                    pointY = 0.9;
                }
                if (pointY > 70 && pointY <= 80) {
                    pointY = 0.8;
                }
                if (pointY > 80 && pointY <= 90) {
                    pointY = 0.7;
                }
                if (pointY > 90 && pointY <= 100) {
                    pointY = 0.6;
                }
                if (pointY > 100 && pointY <= 110) {
                    pointY = 0.5;
                }
                if (pointY > 110 && pointY <= 120) {
                    pointY = 0.4;
                }
                if (pointY > 120 && pointY <= 130) {
                    pointY = 0.3;
                }
                if (pointY > 130 && pointY <= 140) {
                    pointY = 0.2;
                }
                if (pointY > 140 && pointY <= 150) {
                    pointY = 0.1;
                }
            }
        }
    }
    if (r === '2') {
        if (pointX >= 150 && pointX <= 250) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 150 && pointX <= 160) {
                    pointX = 0.1 *r;
                }
                if (pointX > 160 && pointX <= 170) {
                    pointX = 0.2 * r;
                }
                if (pointX > 170 && pointX <= 180) {
                    pointX = 0.3 * r;
                }
                if (pointX > 180 && pointX <= 190) {
                    pointX = 0.4 * r;
                }
                if (pointX > 190 && pointX <= 200) {
                    pointX = 0.5 * r;
                }
                if (pointX > 200 && pointX <= 210) {
                    pointX = 0.6 * r;
                }
                if (pointX > 210 && pointX <= 220) {
                    pointX = 0.7 * r;
                }
                if (pointX > 220 && pointX <= 230) {
                    pointX = 0.8 * r;
                }
                if (pointX > 230 && pointX <= 240) {
                    pointX = 0.9 * r;
                }
                if (pointX > 240 && pointX <= 250) {
                    pointX = 1 * r;
                }
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }


        // for square
        if (pointX >= 100 && pointX <= 150 && pointY > 150) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }
                
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }

        // for circle
        if (pointX >= 50 && pointX <= 150) {
            if (pointY >= 50 && pointY <= 150) {
                if (pointX >= 50 && pointX <= 60) {
                    pointX = -1 * r;
                }
                if (pointX > 60 && pointX <= 70) {
                    pointX = -0.9 * r;
                }
                if (pointX > 70 && pointX <= 80) {
                    pointX = -0.8 * r;
                }
                if (pointX > 80 && pointX <= 90) {
                    pointX = -0.7 * r;
                }
                if (pointX > 90 && pointX <= 100) {
                    pointX = -0.6 * r;
                }
                if (pointX > 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }


                if (pointY > 50 && pointY <= 60) {
                    pointY = 1 * r;
                }
                if (pointY > 60 && pointY <= 70) {
                    pointY = 0.9 * r;
                }
                if (pointY > 70 && pointY <= 80) {
                    pointY = 0.8 * r;
                }
                if (pointY > 80 && pointY <= 90) {
                    pointY = 0.7 * r;
                }
                if (pointY > 90 && pointY <= 100) {
                    pointY = 0.6 * r;
                }
                if (pointY > 100 && pointY <= 110) {
                    pointY = 0.5 * r;
                }
                if (pointY > 110 && pointY <= 120) {
                    pointY = 0.4 * r;
                }
                if (pointY > 120 && pointY <= 130) {
                    pointY = 0.3 * r;
                }
                if (pointY > 130 && pointY <= 140) {
                    pointY = 0.2 * r;
                }
                if (pointY > 140 && pointY <= 150) {
                    pointY = 0.1 * r;
                }
            }
        }
    }
    if (r === '3') {
        if (pointX >= 150 && pointX <= 250) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 150 && pointX <= 160) {
                    pointX = 0.1 *r;
                }
                if (pointX > 160 && pointX <= 170) {
                    pointX = 0.2 * r;
                }
                if (pointX > 170 && pointX <= 180) {
                    pointX = 0.3 * r;
                }
                if (pointX > 180 && pointX <= 190) {
                    pointX = 0.4 * r;
                }
                if (pointX > 190 && pointX <= 200) {
                    pointX = 0.5 * r;
                }
                if (pointX > 200 && pointX <= 210) {
                    pointX = 0.6 * r;
                }
                if (pointX > 210 && pointX <= 220) {
                    pointX = 0.7 * r;
                }
                if (pointX > 220 && pointX <= 230) {
                    pointX = 0.8 * r;
                }
                if (pointX > 230 && pointX <= 240) {
                    pointX = 0.9 * r;
                }
                if (pointX > 240 && pointX <= 250) {
                    pointX = 1 * r;
                }
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }


        // for square
        if (pointX >= 100 && pointX <= 150 && pointY > 150) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }
                
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }

        // for circle
        if (pointX >= 50 && pointX <= 150) {
            if (pointY >= 50 && pointY <= 150) {
                if (pointX >= 50 && pointX <= 60) {
                    pointX = -1 * r;
                }
                if (pointX > 60 && pointX <= 70) {
                    pointX = -0.9 * r;
                }
                if (pointX > 70 && pointX <= 80) {
                    pointX = -0.8 * r;
                }
                if (pointX > 80 && pointX <= 90) {
                    pointX = -0.7 * r;
                }
                if (pointX > 90 && pointX <= 100) {
                    pointX = -0.6 * r;
                }
                if (pointX > 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }


                if (pointY > 50 && pointY <= 60) {
                    pointY = 1 * r;
                }
                if (pointY > 60 && pointY <= 70) {
                    pointY = 0.9 * r;
                }
                if (pointY > 70 && pointY <= 80) {
                    pointY = 0.8 * r;
                }
                if (pointY > 80 && pointY <= 90) {
                    pointY = 0.7 * r;
                }
                if (pointY > 90 && pointY <= 100) {
                    pointY = 0.6 * r;
                }
                if (pointY > 100 && pointY <= 110) {
                    pointY = 0.5 * r;
                }
                if (pointY > 110 && pointY <= 120) {
                    pointY = 0.4 * r;
                }
                if (pointY > 120 && pointY <= 130) {
                    pointY = 0.3 * r;
                }
                if (pointY > 130 && pointY <= 140) {
                    pointY = 0.2 * r;
                }
                if (pointY > 140 && pointY <= 150) {
                    pointY = 0.1 * r;
                }
            }
        }
    }
    if (r === '4') {
        if (pointX >= 150 && pointX <= 250) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 150 && pointX <= 160) {
                    pointX = 0.1 *r;
                }
                if (pointX > 160 && pointX <= 170) {
                    pointX = 0.2 * r;
                }
                if (pointX > 170 && pointX <= 180) {
                    pointX = 0.3 * r;
                }
                if (pointX > 180 && pointX <= 190) {
                    pointX = 0.4 * r;
                }
                if (pointX > 190 && pointX <= 200) {
                    pointX = 0.5 * r;
                }
                if (pointX > 200 && pointX <= 210) {
                    pointX = 0.6 * r;
                }
                if (pointX > 210 && pointX <= 220) {
                    pointX = 0.7 * r;
                }
                if (pointX > 220 && pointX <= 230) {
                    pointX = 0.8 * r;
                }
                if (pointX > 230 && pointX <= 240) {
                    pointX = 0.9 * r;
                }
                if (pointX > 240 && pointX <= 250) {
                    pointX = 1 * r;
                }
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }


        // for square
        if (pointX >= 100 && pointX <= 150 && pointY > 150) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }
                
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }

        // for circle
        if (pointX >= 50 && pointX <= 150) {
            if (pointY >= 50 && pointY <= 150) {
                if (pointX >= 50 && pointX <= 60) {
                    pointX = -1 * r;
                }
                if (pointX > 60 && pointX <= 70) {
                    pointX = -0.9 * r;
                }
                if (pointX > 70 && pointX <= 80) {
                    pointX = -0.8 * r;
                }
                if (pointX > 80 && pointX <= 90) {
                    pointX = -0.7 * r;
                }
                if (pointX > 90 && pointX <= 100) {
                    pointX = -0.6 * r;
                }
                if (pointX > 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }


                if (pointY > 50 && pointY <= 60) {
                    pointY = 1 * r;
                }
                if (pointY > 60 && pointY <= 70) {
                    pointY = 0.9 * r;
                }
                if (pointY > 70 && pointY <= 80) {
                    pointY = 0.8 * r;
                }
                if (pointY > 80 && pointY <= 90) {
                    pointY = 0.7 * r;
                }
                if (pointY > 90 && pointY <= 100) {
                    pointY = 0.6 * r;
                }
                if (pointY > 100 && pointY <= 110) {
                    pointY = 0.5 * r;
                }
                if (pointY > 110 && pointY <= 120) {
                    pointY = 0.4 * r;
                }
                if (pointY > 120 && pointY <= 130) {
                    pointY = 0.3 * r;
                }
                if (pointY > 130 && pointY <= 140) {
                    pointY = 0.2 * r;
                }
                if (pointY > 140 && pointY <= 150) {
                    pointY = 0.1 * r;
                }
            }
        }
    }
    if (r === '5') {
        if (pointX >= 150 && pointX <= 250) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 150 && pointX <= 160) {
                    pointX = 0.1 *r;
                }
                if (pointX > 160 && pointX <= 170) {
                    pointX = 0.2 * r;
                }
                if (pointX > 170 && pointX <= 180) {
                    pointX = 0.3 * r;
                }
                if (pointX > 180 && pointX <= 190) {
                    pointX = 0.4 * r;
                }
                if (pointX > 190 && pointX <= 200) {
                    pointX = 0.5 * r;
                }
                if (pointX > 200 && pointX <= 210) {
                    pointX = 0.6 * r;
                }
                if (pointX > 210 && pointX <= 220) {
                    pointX = 0.7 * r;
                }
                if (pointX > 220 && pointX <= 230) {
                    pointX = 0.8 * r;
                }
                if (pointX > 230 && pointX <= 240) {
                    pointX = 0.9 * r;
                }
                if (pointX > 240 && pointX <= 250) {
                    pointX = 1 * r;
                }
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }


        // for square
        if (pointX >= 100 && pointX <= 150 && pointY > 150) {
            if (pointY >= 150 && pointY <= 250) {
                if (pointX >= 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }
                
                if (pointY > 150 && pointY <= 160) {
                    pointY = -0.1 * r;
                }
                if (pointY > 160 && pointY <= 170) {
                    pointY = -0.2 * r;
                }
                if (pointY > 170 && pointY <= 180) {
                    pointY = -0.3 * r;
                }
                if (pointY > 180 && pointY <= 190) {
                    pointY = -0.4 * r;
                }
                if (pointY > 190 && pointY <= 200) {
                    pointY = -0.5 * r;
                }
                if (pointY > 200 && pointY <= 210) {
                    pointY = -0.6 * r;
                }
                if (pointY > 210 && pointY <= 220) {
                    pointY = -0.7 * r;
                }
                if (pointY > 220 && pointY <= 230) {
                    pointY = -0.8 * r;
                }
                if (pointY > 230 && pointY <= 240) {
                    pointY = -0.9 * r;
                }
                if (pointY > 240 && pointY <= 250) {
                    pointY = -1 * r;
                }
            }
        }

        // for circle
        if (pointX >= 50 && pointX <= 150) {
            if (pointY >= 50 && pointY <= 150) {
                if (pointX >= 50 && pointX <= 60) {
                    pointX = -1 * r;
                }
                if (pointX > 60 && pointX <= 70) {
                    pointX = -0.9 * r;
                }
                if (pointX > 70 && pointX <= 80) {
                    pointX = -0.8 * r;
                }
                if (pointX > 80 && pointX <= 90) {
                    pointX = -0.7 * r;
                }
                if (pointX > 90 && pointX <= 100) {
                    pointX = -0.6 * r;
                }
                if (pointX > 100 && pointX <= 110) {
                    pointX = -0.5 * r;
                }
                if (pointX > 110 && pointX <= 120) {
                    pointX = -0.4 * r;
                }
                if (pointX > 120 && pointX <= 130) {
                    pointX = -0.3 * r;
                }
                if (pointX > 130 && pointX <= 140) {
                    pointX = -0.2 * r;
                }
                if (pointX > 140 && pointX <= 150) {
                    pointX = -0.1 * r;
                }


                if (pointY > 50 && pointY <= 60) {
                    pointY = 1 * r;
                }
                if (pointY > 60 && pointY <= 70) {
                    pointY = 0.9 * r;
                }
                if (pointY > 70 && pointY <= 80) {
                    pointY = 0.8 * r;
                }
                if (pointY > 80 && pointY <= 90) {
                    pointY = 0.7 * r;
                }
                if (pointY > 90 && pointY <= 100) {
                    pointY = 0.6 * r;
                }
                if (pointY > 100 && pointY <= 110) {
                    pointY = 0.5 * r;
                }
                if (pointY > 110 && pointY <= 120) {
                    pointY = 0.4 * r;
                }
                if (pointY > 120 && pointY <= 130) {
                    pointY = 0.3 * r;
                }
                if (pointY > 130 && pointY <= 140) {
                    pointY = 0.2 * r;
                }
                if (pointY > 140 && pointY <= 150) {
                    pointY = 0.1 * r;
                }
            }
        }
    }

    return {pointX, pointY}
}