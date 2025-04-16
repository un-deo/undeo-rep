import random

def print_board(board, reveal=False):
    for row in board:
        print(" ".join(str(cell) if reveal or cell != 'M' else '.' for cell in row))

def create_board(size, mines):
    board = [[0 for _ in range(size)] for _ in range(size)]
    mine_positions = set()
    while len(mine_positions) < mines:
        x, y = random.randint(0, size - 1), random.randint(0, size - 1)
        if (x, y) not in mine_positions:
            mine_positions.add((x, y))
            board[x][y] = 'M'
            for i in range(max(0, x - 1), min(size, x + 2)):
                for j in range(max(0, y - 1), min(size, y + 2)):
                    if board[i][j] != 'M':
                        board[i][j] += 1
    return board

def play_game():
    size = int(input("Enter board size: "))
    mines = int(input("Enter number of mines: "))
    board = create_board(size, mines)
    revealed = [[False for _ in range(size)] for _ in range(size)]
    while True:
        print_board([[board[i][j] if revealed[i][j] else '.' for j in range(size)] for i in range(size)])
        x, y = map(int, input("Enter coordinates to reveal (row col): ").split())
        if board[x][y] == 'M':
            print("Game Over! You hit a mine.")
            print_board(board, reveal=True)
            break
        revealed[x][y] = True
        if all(revealed[i][j] or board[i][j] == 'M' for i in range(size) for j in range(size)):
            print("Congratulations! You cleared the board.")
            print_board(board, reveal=True)
            break

if __name__ == "__main__":
    play_game()