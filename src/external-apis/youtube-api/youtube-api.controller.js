"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YoutubeApiController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const youtube_api_service_1 = require("./youtube-api.service");
let YoutubeApiController = class YoutubeApiController {
    youtubeApiService;
    constructor(youtubeApiService) {
        this.youtubeApiService = youtubeApiService;
    }
    async searchVideos(query, pageToken) {
        return await this.youtubeApiService.searchVideos(query, 5, pageToken);
    }
};
exports.YoutubeApiController = YoutubeApiController;
__decorate([
    (0, common_1.Get)('search'),
    openapi.ApiResponse({ status: 200, type: require("../dto/youtube-response.dto").YoutubeSearchResponseDto }),
    __param(0, (0, common_1.Query)('query')),
    __param(1, (0, common_1.Query)('pageToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], YoutubeApiController.prototype, "searchVideos", null);
exports.YoutubeApiController = YoutubeApiController = __decorate([
    (0, common_1.Controller)('youtube'),
    __metadata("design:paramtypes", [youtube_api_service_1.YoutubeApiService])
], YoutubeApiController);
//# sourceMappingURL=youtube-api.controller.js.map