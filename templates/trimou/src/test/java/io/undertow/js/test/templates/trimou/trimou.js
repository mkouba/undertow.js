/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2014 Red Hat, Inc., and individual contributors
 * as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

$undertow
    .setDefault('template_type', 'trimou')
    .onGet("/testTemplate1", "template1.txt", function($exchange) {
        return {data: "Some Data"};
    })
    .onGet("/testTemplate2", { template: "template2.txt", headers: {'Content-Type': "text/plain; charset=UTF-8", 'foo': 'bar'}}, function($exchange) {
        return {data: "Some Data", loop: [{foo:'a1', bar: 'b1'}, {foo:'a2', bar: 'b2'}]};
    })
    .onGet("/testTemplate3", { template: "template3.txt", headers: {'Content-Type': "text/plain; charset=UTF-8", 'foo': 'bar'}}, function($exchange) {
        return {data: "Some Data", loop: [{foo:'a1', bar: 'b1'}, {foo:'a2', bar: 'b2'}]};
    })
    .onGet("/testTemplatePartial", "template_partial.txt", function($exchange) {
        return {data: "Some Data"};
    })
    .onGet("/testTemplateExtensions", "template_extensions.txt", function($exchange) {
        return {data: "Dummy"};
    });

