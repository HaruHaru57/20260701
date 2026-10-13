data = [15, 3, 42, 8, 20]
target = 8

found_index = -1

for i in range(len(data)):
    if data[i] == target:
        found_index = i
        break

if found_index != -1:
    print(f"見つかりました!　インデックス: {found_index}")
else:
    print("見つかりませんでした。")