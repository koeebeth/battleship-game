// Calculate coordinates on the board of specific ship
function calcCoords(length, coords, align) {
    // Empty array for coordinates
    let cells = [];

    if(align === 'x'){
        // If alignment is x, alternate the x coordinates and keep y coordinates
        for(let i = coords[0]; i < coords[0] + length; i++){
            cells.push([i, coords[1]]);
        }
    }
    else {
        // If alignment is y, alternate the y coordinates and keep x coordinates the same
        for(let i = coords[1]; i < coords[1] + length; i++){
            cells.push([coords[0], i]);
        }    
    }

    return cells;
}

function calcArea(cells){
    const start = [cells[0][0] - 1, cells[0][1] - 1]
    const end = [cells[cells.length - 1][1] + 1, cells[cells.length - 1][1] + 1]
    let area = [];
    for (let x = start[0]; x <= end[0]; x++){
        for (let y = start[1]; y <= end[1]; y++){
            if(isInBoard(x, y)) area.push([x, y])
        }
    }
    return area;
}

function isInBoard(x, y) {
    return x >= 0 && y >= 0 && x < 10 && y < 10
}

export {calcCoords, isInBoard, calcArea}