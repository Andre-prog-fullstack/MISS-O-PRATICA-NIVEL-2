// Função para trocar os valores de duas posições de um vetor
const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const index1 = Math.floor(Math.random() * array.length);
        const index2 = Math.floor(Math.random() * array.length);
        swap(array, index1, index2);
    }
};

// Função Bubble Sort
const bubble_sort = (array) => {
    const n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);

    return array;
};

// Função Selection Sort
const selection_sort = (array) => {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }

    return array;
};

// Função de particionamento para o Quick Sort
const particionamento = (array, low, high, pivot) => {
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};

// Função Quick Sort
const quick_sort = (array, low = 0, high = array.length - 1) => {
    if (low < high) {
        const pivotIndex = particionamento(array, low, high, array[high]);
        quick_sort(array, low, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, high);
    }
    return array;
};
