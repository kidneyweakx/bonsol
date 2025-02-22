"use strict";
// automatically generated by the FlatBuffers compiler, do not modify
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimV1T = exports.ClaimV1 = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
const flatbuffers = __importStar(require("flatbuffers"));
class ClaimV1 {
    constructor() {
        this.bb = null;
        this.bb_pos = 0;
    }
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsClaimV1(bb, obj) {
        return (obj || new ClaimV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsClaimV1(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new ClaimV1()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    executionId(optionalEncoding) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
    }
    blockCommitment() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.readUint64(this.bb_pos + offset) : BigInt('0');
    }
    mutate_block_commitment(value) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        if (offset === 0) {
            return false;
        }
        this.bb.writeUint64(this.bb_pos + offset, value);
        return true;
    }
    static startClaimV1(builder) {
        builder.startObject(2);
    }
    static addExecutionId(builder, executionIdOffset) {
        builder.addFieldOffset(0, executionIdOffset, 0);
    }
    static addBlockCommitment(builder, blockCommitment) {
        builder.addFieldInt64(1, blockCommitment, BigInt('0'));
    }
    static endClaimV1(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static finishClaimV1Buffer(builder, offset) {
        builder.finish(offset);
    }
    static finishSizePrefixedClaimV1Buffer(builder, offset) {
        builder.finish(offset, undefined, true);
    }
    static createClaimV1(builder, executionIdOffset, blockCommitment) {
        ClaimV1.startClaimV1(builder);
        ClaimV1.addExecutionId(builder, executionIdOffset);
        ClaimV1.addBlockCommitment(builder, blockCommitment);
        return ClaimV1.endClaimV1(builder);
    }
    unpack() {
        return new ClaimV1T(this.executionId(), this.blockCommitment());
    }
    unpackTo(_o) {
        _o.executionId = this.executionId();
        _o.blockCommitment = this.blockCommitment();
    }
}
exports.ClaimV1 = ClaimV1;
class ClaimV1T {
    constructor(executionId = null, blockCommitment = BigInt('0')) {
        this.executionId = executionId;
        this.blockCommitment = blockCommitment;
    }
    pack(builder) {
        const executionId = (this.executionId !== null ? builder.createString(this.executionId) : 0);
        return ClaimV1.createClaimV1(builder, executionId, this.blockCommitment);
    }
}
exports.ClaimV1T = ClaimV1T;
