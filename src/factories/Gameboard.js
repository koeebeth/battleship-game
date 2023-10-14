import Ship from './Ship.js'
import {calcCoords, isInBoard, calcArea} from '../utils/calcCoords.js';

export default class Gameboard {
    constructor () {
        this.board = this.initBoard();
        this.missed = 0;
    }

    initBoard () {
        let board = [];
        for (let i = 0; i < 10; i++){
            let row = [];
            for (let j = 0; j < 10; j++){
                row.push(new Cell(j, i));
            }
            board.push(row);
        }
        return board;
    }

    placeShip (name, length, coords, align = 'x') {
        const board = this.board;
        // Create new ship from factory
        const ship = new Ship(name, length);
        // Cells needed for the ship
        const cells = calcCoords(length, coords, align);
        

        if(this.isAvailable(cells)){
            // Mark ship cells
            cells.map((cell) => {
                board[cell[1]][cell[0]].ship = ship;
            })

            // Set surrounding cells to unavailable
            const area = calcArea(cells);
            area.map((cell) => board[cell[1]][cell[0]].isAvailable = false)
            return true;
        }
        return false
    }

    receiveAttack (x ,y) {
        let cell = this.board[y][x];
        if(!cell.isHit){
            cell.isHit = true;
            if (cell.ship) {
                cell.ship.hit()
            }
            else {
                this.missed += 1;
            }
    }}

    isAvailable(cells){
        const board = this.board
        //Check every cell
        return (cells.every((cell) => {
            if (isInBoard(cell[1], cell[0]))
                return board[cell[1]][cell[0]].isAvailable
            return false;
        }))
    }
}

class Cell {
    constructor (x, y) {
        this.isHit = false;
        this.ship = null;
        this.isAvailable = true;
        this.coords = [x, y];
    } 
}