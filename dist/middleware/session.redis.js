"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
class Redis {
    static maintain_session_redis(user, device) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.connect();
            client.on('error', err => console.log('Redis client error', err));
            try {
                if (user) {
                    yield client.SET(user.username, JSON.stringify({
                        'user_id': user._id,
                        'device_id': device,
                        'status': true
                    }));
                    const session = yield client.get(user.username);
                    console.log(session);
                }
                else {
                    console.log("User not found");
                }
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static logout_session_redis(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield client.SET(user.username, JSON.stringify({
                    user_id: user.id,
                    status: false
                }));
                const session = yield client.get(user.username);
                console.log(session);
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.Redis = Redis;
//# sourceMappingURL=session.redis.js.map