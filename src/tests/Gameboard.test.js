import Gameboard from "../factories/Gameboard";


let board;
beforeEach(() => {
    board = new Gameboard;
})

test('Correctly indicates available cells', () => {
    const cells = [[0,0], [0,1], [0,2], [0,3]];

    console.log(board.board[1][1])
    expect(board.isAvailable(cells)).toBeTruthy();
})

test('Correctly places ship cells', () => {
    expect(board.placeShip('cruiser', 2, [0,0])).toBeTruthy()
    expect(board.board[0][0].isAvailable).toBeFalsy()
    expect(board.board[0][1].isAvailable).toBeFalsy()
    expect(board.board[2][1].isAvailable).toBeTruthy()
    expect(board.board[2][2].isAvailable).toBeTruthy()

})