const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
    const DEFAULT_PARTITION_KEY = "0";
    const KEY_MAX_LENGTH = 256;
    let candidate;

    if (event) {
        candidate =
            event?.partitionKey ||
            // Hashes the event data or fallback to the trivial key
            crypto
                .createHash("sha3-512")
                .update(JSON.stringify(event) || DEFAULT_PARTITION_KEY)
                .digest("hex");
    }

    if (candidate) {
        if (!candidate instanceof String) {
            candidate = JSON.stringify(candidate);
        }
    } else {
        candidate = DEFAULT_PARTITION_KEY;
    }

    if (candidate.length > KEY_MAX_LENGTH) {
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }
    
    return candidate;
};
