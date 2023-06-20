const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
    it("Returns the literal '0' when given no input", () => {
        const trivialKey = deterministicPartitionKey();
        expect(trivialKey).toBe("0");
    });

    it("should return the provided partition key", () => {
        const trivialKey = deterministicPartitionKey({ partitionKey: "justAKey" });
        expect(trivialKey).toBe("justAKey");
    });

    it("should generate a key if partitionKey is undefined", () => {
        const trivialKey = deterministicPartitionKey({});

        expect(trivialKey).toBeDefined();
        expect(typeof trivialKey).toBe("string");
    });

    it("should generate a key if partitionKey is null", () => {
      const trivialKey = deterministicPartitionKey({partitionKey: null});

      expect(trivialKey).toBeDefined();
      expect(typeof trivialKey).toBe("string");
  });

    it('should generate 128 key if the length exceeds the maximum', () => {
  
      const trivialKey = deterministicPartitionKey({partitionKey: "abcd".repeat(1000),});
  
      expect(trivialKey).toBeDefined();
      expect(typeof trivialKey).toBe('string');
      expect(trivialKey.length).toBe(128);
    });
});
