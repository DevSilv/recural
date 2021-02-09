OBJ = './a.out'
C_SRCS = ./*.c ../*.c
H_SRCS = ./*.h ../*.h

all: $(OBJ)

$(OBJ): $(C_SRCS) $(H_SRCS)
	gcc -Wall -Wextra -g -lm -o $(OBJ) $(C_SRCS)

v: $(OBJ)
	valgrind \
		--leak-check=yes \
		--leak-check=full \
		--show-leak-kinds=all \
		--track-origins=yes \
		--read-var-info=yes \
		-s \
		$(OBJ)

clean:
	rm $(OBJ)