/*1. Newton Second Law*/
Pseudocode
1. STORE 'F' with equal 0
2. STORE 'm' with any number
3. STORE 'a' with any number
4. CALCULATE 'm' times 'a'
5. SET 'F' value with calculation result
6. DISPLAY 'F'

Algoritma
1. Buat variabel 'F' dengan nilai 0
2. Buat variabel 'm' dengan nilai yang bisa diinputkan
3. Buat variabel 'a' dengan nilai yang bisa diinputkan
4. F = m * a
5. Tampilkan nilai 'F'

/*2. Tahun Kabisat*/
Pseudocode
1. STORE 'tahun' with any number
2. IF 'tahun' modulus 4 equals 0 and 'tahun' modulus 100 not equals 0
	DISPLAY 'Tahun Kabisat'
3. ELSE IF 'tahun' modulus 4 equals 0 and 'tahun' modulus 100 equals 0 and 'tahun' modulus 400 equals 0
	DISPLAY 'Tahun Kabisat'
4. ELSE
	DISPLAY 'Bukan Tahun Kabisat'

Algoritma
1. Buat variabel 'tahun' dengan nilai yang bisa diinputkan
2. Jika 'tahun' modulus 4 sama dengan 0 dan 'tahun' modulus 100 tidak sama dengan 0, Tampilkan 'Tahun Kabisat'
3. Jika 'tahun' modulus 4 sama dengan 0 dan 'tahun' moudulus 100 sama dengan 0 dan 'tahun' modulus 400 sama dengan 0, tampilkan 'Tahun Kabisat'
4. Selain itu tampilkan 'Bukan Tahun Kabisat'

/*3. Laundry Day*/
Pseudocode
1. STORE 'counterBaju' with equals 0
2. WHILE 'counterBaju' less than 20
	ADD 'counterBaju' by 1
3. IF 'counterBaju' equals 20
	DISPLAY 'Mesin Cuci Dinyalakan'

Algoritma
1. Buat variabel 'counterBaju' dengan nilai 0
2. Buat perulangan dengan variabel indeks 0, sampai dengan lebih kecil dari 20 dengan penambahan 1 setiap perulangan
	3. Melakukan penambahan 'counterBaju' = 'counterBaju' + 1
4. Jika 'counterBaju' sama dengan 20
	Tampilkan 'Mesin Cuci Dinyalakan'

/*4. Periksa Kuku*/
Pseudocode
1. STORE 'indeks' equals 0
2. WHILE 'indeks' less than 40
		IF siswa[indeks] equals "Kuku Panjang"
			DISPLAY "Hukum Siswa"
		Else
			DISPLAY "Puji Siswa"
	ADD 'indeks' by 1

Algoritma
1. Buat perulangan dengan variabel indeks dari 0, indeks sampai dengan 40, dengan penambahan 1 setiap perulangan
2. Jika siswa[indeks] sama dengan Kuku Panjang
	Tampilkan "Hukum Siswa"
3. Selain itu
	Tampilkan "Puji Siswa"