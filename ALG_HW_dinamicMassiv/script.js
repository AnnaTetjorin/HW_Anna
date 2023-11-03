//Завершить реализацию Динамического массива. добавьте метод поиска позиции элемента и удаления элемента по индексу
class DynamicArray {
    constructor() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    get(index) {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        return this.array[index];
    }

    set(index, value) {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        this.array[index] = value;
    }

    insert(index, value) {
        if (index < 0 || index > this.size()) {
            throw new Error('Index out of bounds');
        }
        this.array.splice(index, 0, value);
    }

    remove(index) {
        if (index < 0 || index >= this.size()) {
            throw new Error('Index out of bounds');
        }
        this.array.splice(index, 1);
    }

    search(value) {
        const index = this.array.indexOf(value);
        if (index === -1) {
            return 'Элемент не найден';
        }
        return `Элемент найден на позиции ${index}`;
    }
}

const dynamicArray = new DynamicArray();
dynamicArray.insert(0, 5);
dynamicArray.insert(1, 3);
dynamicArray.insert(2, 8);
console.log('Массив:', dynamicArray.array);
console.log('Поиск элемента:', dynamicArray.search(3));
dynamicArray.remove(1);
console.log('Массив после удаления элемента:', dynamicArray.array);


//Постройте частотный словарь букв английского алфавита
function buildFrequencyDictionary(text) {
    const frequencyDictionary = {};
    const cleanText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    for (let i = 0; i < cleanText.length; i++) {
        const letter = cleanText[i];
        frequencyDictionary[letter] = (frequencyDictionary[letter] || 0) + 1;
    }
    return frequencyDictionary;
}

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus ac ex lobortis eleifend. Sed vel metus in turpis tristique sollicitudin.";
const frequencyDict = buildFrequencyDictionary(text);

console.log("Частотный словарь букв английского алфавита:");
for (const [letter, frequency] of Object.entries(frequencyDict)) {
    console.log(`${letter}: ${frequency}`);
}

